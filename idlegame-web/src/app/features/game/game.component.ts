import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

class Gadget {
  constructor(public name: string, public count: number = 0, public cost: number = 0) {
    this.name = name;
    this.count = count;
    this.cost = cost;
  }
}

@Component({
  selector: 'idle-game',
  standalone: true,
  templateUrl: './game.component.html',
  imports: [
    NgForOf
  ],
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit {
  count: number = 0;

  refreshRate: number = 0.1;

  clickGadgets: Map<string, Gadget> = new Map<string, Gadget>([
    ["doubleTap", new Gadget("Double-Tap", 0, 10)],
    ["autoClicker", new Gadget("Auto-Clicker", 0, 100)],
    ["luckyFinger", new Gadget("Lucky-Finger", 0, 1000)]
  ]);

  get gadgetCount() {
    return this.clickGadgets.get('doubleTap')!.count + this.clickGadgets.get('autoClicker')!.count + this.clickGadgets.get('luckyFinger')!.count;
  }

  autoClickButton() {
    this.count += this.refreshRate * this.clickGadgets.get('autoClicker')!.count * (1 + (Math.random() * this.clickGadgets.get('luckyFinger')!.count));
  }

  manualClickButton() {
    this.count += 1 + this.clickGadgets.get('doubleTap')!.count;
  }

  ngOnInit() {
    setInterval(() => this.autoClickButton(), 1000 * this.refreshRate);
  }

  buyGadget(gadget: string) {
    if (!this.clickGadgets.has(gadget)) {
      console.error("Gadget not found");
      return;
    }
    if (this.count >= this.clickGadgets.get(gadget)!.cost) {
      this.count -= this.clickGadgets.get(gadget)!.cost;
      this.clickGadgets.get(gadget)!.count += 1;
      this.clickGadgets.get(gadget)!.cost *= 2;
    }
  }

  protected readonly Math = Math;
}
