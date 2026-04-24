"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activateClawdBotPanel = void 0;
// Minimal Clawd Bot panel
function activateClawdBotPanel(registry) {
    if (registry && typeof registry.registerContribution === 'function') {
        registry.registerContribution('clawdBotPanel', { id: 'clawdBotPanel', version: '0.1.0', name: 'Clawd Bot Panel' });
    }
}
exports.activateClawdBotPanel = activateClawdBotPanel;
