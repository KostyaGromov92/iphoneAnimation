import Ex from './ex.js';
import {TimelineMax} from 'gsap';

let tl = new TimelineMax();

let canvas = {state: 0};

tl.to(canvas, 1, {state: 1, onUpdate: function() {
  Ex(canvas.state);
}});	

//Ex(1);
