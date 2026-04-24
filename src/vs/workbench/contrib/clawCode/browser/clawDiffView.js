"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawDiffView = void 0;
// Minimal Claw Code inline diff view
function activateClawDiffView(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawDiffView', { id: 'clawDiffView', version: '0.1.0', name: 'Claw Diff View' });
    }
    // Placeholder diff view for P0 scaffold
}
exports.activateClawDiffView = activateClawDiffView;
