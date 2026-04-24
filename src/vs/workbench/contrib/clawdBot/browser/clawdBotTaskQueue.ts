// Minimal Clawd Bot task queue
export class ClawdBotTaskQueue {
  private tasks: any[] = [];
  add(task: any) { this.tasks.push(task); }
  next(): any { return this.tasks.shift(); }
}
