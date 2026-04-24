"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawCodeLens = void 0;
// Minimal Claw Code code lens provider
function activateClawCodeLens(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawCodeLens', { id: 'clawCodeLens', version: '0.1.0', name: 'Claw Code Lens' });
    }
    // Placeholder code lens for P0 scaffold
}
exports.activateClawCodeLens = activateClawCodeLens;
