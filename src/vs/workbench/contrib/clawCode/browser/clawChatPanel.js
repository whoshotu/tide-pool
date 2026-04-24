"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawChatPanel = void 0;
// Minimal Claw Code chat panel (UI)
function activateClawChatPanel(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawChatPanel', { id: 'clawChatPanel', version: '0.1.0', name: 'Claw Chat Panel' });
    }
    // Placeholder activation for P0 scaffold
}
exports.activateClawChatPanel = activateClawChatPanel;
