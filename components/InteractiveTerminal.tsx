"use client";

import { useState, useEffect, useRef } from "react";
import { Terminal as TerminalIcon, Play, RefreshCw, CheckCircle2, Sparkles } from "lucide-react";

type LogLine = {
  text: string;
  type: "info" | "success" | "warn" | "accent" | "dim";
  time?: string;
};

const SIMULATION_SCRIPTS: Record<
  string,
  {
    title: string;
    description: string;
    logs: LogLine[];
  }
> = {
  playwright: {
    title: "Playwright E2E Regression",
    description: "Multi-browser distributed parallel test execution",
    logs: [
      { text: "$ playwright test --project=chromium,firefox,webkit --workers=4", type: "accent" },
      { text: "⚡ Initializing Chromium, Firefox & WebKit headless runners...", type: "dim" },
      { text: "✓ [Chromium] auth.spec.ts: User MFA login flow passed (380ms)", type: "success" },
      { text: "✓ [Firefox] checkout.spec.ts: Stripe payment 3D-secure passed (620ms)", type: "success" },
      { text: "✓ [WebKit] policy-renewal.spec.ts: Insurance quote generation passed (440ms)", type: "success" },
      { text: "✓ [Chromium] dashboard.spec.ts: Real-time telemetry charts verified (290ms)", type: "success" },
      { text: "📊 4 passed (1.73s) | Coverage: 98.4% | Zero regression detected", type: "success" },
    ],
  },
  api: {
    title: "Postman + JMeter Performance",
    description: "Fintech REST API validation & concurrency stress load",
    logs: [
      { text: "$ newman run fintech_payment_gateway.json --env=prod-stage", type: "accent" },
      { text: "⚡ POST /api/v2/transactions/authorize - Status: 200 OK (82ms)", type: "success" },
      { text: "⚡ POST /api/v2/settlement/batch - Status: 202 Accepted (114ms)", type: "success" },
      { text: "⚡ GET /api/v2/ledger/audit - Status: 200 OK (64ms)", type: "success" },
      { text: "🔥 JMeter Thread Group: 1,500 Virtual Users ramped over 30s...", type: "warn" },
      { text: "✓ p99 Latency: 112ms | Throughput: 4,820 req/sec | Error Rate: 0.00%", type: "success" },
      { text: "🏆 Performance SLA Verified: Exceeds PCI-DSS Tier 1 Standards", type: "info" },
    ],
  },
  n8n: {
    title: "n8n AI Defect Orchestrator",
    description: "Autonomous bug triage, Jira logging & Slack alerts",
    logs: [
      { text: "$ trigger n8n:agent --event=pipeline_failure_detected", type: "accent" },
      { text: "🤖 AI Agent activated: Analyzing stack trace & DOM snapshot...", type: "info" },
      { text: "🔍 Root cause identified: Stale element locator in dynamic modal #p-302", type: "warn" },
      { text: "✓ Jira ticket auto-created: [QA-1849] High Priority - Auto-tagged UI/DOM", type: "success" },
      { text: "✓ Slack notification dispatched to #qa-core with auto-fix suggestion", type: "success" },
      { text: "✨ n8n Workflow completed: Triaging time reduced from 45m -> 8s", type: "accent" },
    ],
  },
};

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState<"playwright" | "api" | "n8n">("playwright");
  const [displayedLogs, setDisplayedLogs] = useState<LogLine[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement>(null);

  const runSimulation = (key: "playwright" | "api" | "n8n") => {
    setActiveTab(key);
    setIsRunning(true);
    setDisplayedLogs([]);

    const script = SIMULATION_SCRIPTS[key];
    script.logs.forEach((log, index) => {
      setTimeout(() => {
        setDisplayedLogs((prev) => [...prev, log]);
        if (index === script.logs.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  useEffect(() => {
    runSimulation("playwright");
  }, []);

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [displayedLogs]);

  return (
    <div className="w-full rounded-2xl overflow-hidden glass border border-white/10 shadow-2xl shadow-primary-950/50 text-left font-mono text-xs">
      {/* Terminal Title Bar */}
      <div className="bg-dark-900/90 px-4 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <div className="flex items-center gap-2 ml-2 text-white/50 text-xs">
            <TerminalIcon size={14} className="text-primary-400" />
            <span className="text-white/80 font-semibold">ranveer@qa-architect</span>
            <span className="text-white/30 hidden sm:inline">:~/automation-suite</span>
          </div>
        </div>

        {/* Live CI/CD Status Badge */}
        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[11px]">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
          <span>CI/CD PIPELINE PASSING</span>
        </div>
      </div>

      {/* Script Selector Tabs */}
      <div className="bg-dark-800/80 px-4 py-2 border-b border-white/5 flex flex-wrap gap-2 items-center">
        <span className="text-white/40 text-[11px] mr-1 hidden sm:inline">Simulate Suite:</span>
        {(["playwright", "api", "n8n"] as const).map((key) => {
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => !isRunning && runSimulation(key)}
              disabled={isRunning}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all duration-200 ${
                isActive
                  ? "bg-primary-600/30 text-primary-300 border border-primary-500/40 shadow-sm"
                  : "text-white/60 hover:text-white hover:bg-white/5 border border-transparent"
              } ${isRunning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
            >
              {key === "playwright" && <Play size={12} className={isActive ? "text-primary-400" : ""} />}
              {key === "api" && <RefreshCw size={12} className={isActive ? "text-primary-400 animate-spin" : ""} />}
              {key === "n8n" && <Sparkles size={12} className={isActive ? "text-accent-400" : ""} />}
              <span className="capitalize">{key === "n8n" ? "n8n AI Agent" : key.toUpperCase()}</span>
            </button>
          );
        })}
      </div>

      {/* Terminal Output Area */}
      <div
        ref={terminalContainerRef}
        className="p-4 sm:p-5 bg-dark-900/95 min-h-[220px] max-h-[280px] overflow-y-auto space-y-2 select-text"
      >
        <div className="text-white/30 pb-1 text-[11px]">
          {"# Ranveer Singh Sankhala - Senior QA Lead Execution Log"}
        </div>

        {displayedLogs.map((log, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 leading-relaxed animate-fade-in ${
              log.type === "success"
                ? "text-green-400"
                : log.type === "accent"
                ? "text-primary-300 font-semibold"
                : log.type === "warn"
                ? "text-yellow-300"
                : log.type === "info"
                ? "text-cyan-300"
                : "text-white/50"
            }`}
          >
            <span className="text-white/30 select-none text-[10px] mt-0.5">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 break-words">{log.text}</span>
          </div>
        ))}

        {isRunning && (
          <div className="flex items-center gap-2 text-primary-400 animate-pulse pt-1">
            <span className="w-2 h-4 bg-primary-400 inline-block animate-bounce" />
            <span className="text-[11px] text-white/50">Executing QA test runner subprocess...</span>
          </div>
        )}
      </div>

      {/* Terminal Footer Info */}
      <div className="bg-dark-800/80 px-4 py-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/40">
        <div className="flex items-center gap-2">
          <CheckCircle2 size={13} className="text-green-400" />
          <span>Exit Code: 0 (SUCCESS)</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Target: Node 20 / Python 3.12</span>
          <span className="text-primary-400 font-semibold">100% Reliable</span>
        </div>
      </div>
    </div>
  );
}
