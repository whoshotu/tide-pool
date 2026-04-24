"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawCodeContribution = void 0;
// Minimal Claw Code browser contribution (frontend)
function activateClawCodeContribution(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawCode', { id: 'clawCode', version: '0.1.0', name: 'Claw Code Core' });
    }
    // Activated as part of IDE bootstrap in P0 scaffold
}
exports.activateClawCodeContribution = activateClawCodeContribution;
