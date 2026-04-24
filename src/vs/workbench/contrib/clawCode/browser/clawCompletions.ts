// Minimal Claw Code completions provider
export function activateClawCompletions(registry?: { registerContribution?: (name: string, details: any) => void }): void {
  if (registry && typeof registry.registerContribution === 'function') {
    registry.registerContribution('clawCodeCompletions', { id: 'clawCodeCompletions', version: '0.1.0', name: 'Claw Code Completions' });
  }
  // Placeholder completions provider for P0 scaffold
}
