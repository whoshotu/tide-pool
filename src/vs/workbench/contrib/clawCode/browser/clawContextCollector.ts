// Minimal Claw Code context collector
export function activateClawContextCollector(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawContextCollector', { id: 'clawContextCollector', version: '0.1.0', name: 'Claw Context Collector' });
  }
  // Lightweight context collector placeholder for P0 scaffold
}
