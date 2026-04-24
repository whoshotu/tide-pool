// Minimal Clawd Bot memory store (in-memory store for P0)
export class ClawdBotMemory {
  private store: any[] = [];
  save(entry: any) { this.store.push(entry); }
  loadAll(): any[] { return this.store; }
}
