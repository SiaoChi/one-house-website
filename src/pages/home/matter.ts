import Matter, {
  Bodies,
  Common,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  Svg,
  Vertices,
} from 'matter-js';
import EnterFrame from 'lesca-enterframe';
import { SVGs } from './config';

type TProps = {
  element: HTMLElement;
  onload: () => void;
  scale: number;
};

export default class MatterSVG {
  props: TProps;
  engine: Engine;
  render: Render;
  runner: Runner;
  color: string = Common.choose(['#ff6600']);
  SVGsProperty: {
    svg: Document;
    size: { width: number; height: number };
    scale: number;
    offset: { x: number; y: number };
  }[] = [];

  dropHeight = 0;
  scale = 1;
  staticObjectNumber = 5;
  scrollState = { start: { x: 0, y: 0, scrollY: 0 }, move: { x: 0, y: 0 }, enabled: false };

  constructor(props: TProps) {
    this.props = props;
    this.scale = this.props.scale;

    const { width, height } = this.props.element.getBoundingClientRect();
    const { Engine, Render, Runner, Bodies, Composite } = Matter;

    this.engine = Engine.create();
    this.runner = Runner.create();
    this.render = Render.create({
      element: this.props.element,
      engine: this.engine,
      options: { width, height, background: 'transparent', wireframes: false },
    });

    const ground = Bodies.rectangle(width * 0.5, height + 250, width, 500, {
      isStatic: true,
      render: { visible: false },
    });

    const scrollStage = Bodies.rectangle(width - 60, height - 20, 150, 100, {
      isStatic: true,
      render: { visible: false },
    });

    const leftWall = Bodies.rectangle(-250, height * 0.5, 500, height, {
      isStatic: true,
      render: { visible: false },
    });

    const rightWall = Bodies.rectangle(width + 250, height * 0.5, 500, height, {
      isStatic: true,
      render: { visible: false },
    });

    const rootWall = Bodies.rectangle(width * 0.5, -250, width, 500, {
      isStatic: true,
      render: { visible: false },
    });

    Composite.add(this.engine.world, [ground, scrollStage, leftWall, rightWall, rootWall]);
    Render.run(this.render);

    this.loadAndPathToVertices();
    window.addEventListener('resize', this.resize.bind(this));
  }

  onLoaded() {
    if (this.SVGsProperty.length === SVGs.length) {
      this.appendSVGs();
      setTimeout(() => {
        Runner.run(this.runner, this.engine);
      }, 1200);

      this.renderer();
      this.mouseCollision();
    }
  }

  appendSVGs() {
    this.SVGsProperty.forEach(({ svg, size, scale, offset }) => {
      const vertexSets = this.select(svg, 'path').map((path) =>
        Vertices.scale(Svg.pathToVertices(path, 10), scale * this.scale, scale * this.scale, {
          x: size.width / 2,
          y: size.height / 2,
        }),
      );
      const md = window.innerWidth / 2;

      Composite.add(
        this.engine.world,
        Bodies.fromVertices(
          md + offset.x * this.scale,
          (this.dropHeight + offset.y) * this.scale,
          vertexSets,
          {
            render: {
              fillStyle: this.color,
              strokeStyle: this.color,
              lineWidth: 30,
              visible: false,
            },
          },
        ),
      );
      this.props.element.appendChild(svg.documentElement);
    });
  }

  loadAndPathToVertices() {
    SVGs.forEach((data) => {
      this.loadSvg(data.path).then(({ svg, size }) => {
        this.SVGsProperty.push({ svg, size, scale: data.scale, offset: data.offset });
        this.onLoaded();
      });
    });
  }

  mouseCollision() {
    const mouse = Mouse.create(this.render.canvas);
    const mouseConstraint = MouseConstraint.create(this.engine, {
      mouse: mouse,
      constraint: { stiffness: 1, render: { visible: false } },
    });
    Composite.add(this.engine.world, mouseConstraint);

    this.render.canvas.addEventListener('wheel', this.onWheel);

    this.render.canvas.addEventListener('touchstart', this.onTouchStart.bind(this));
    this.render.canvas.addEventListener('touchmove', this.onTouchMove.bind(this));
    this.render.canvas.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  onWheel(e: WheelEvent) {
    const { deltaY } = e;
    const { scrollY } = window;
    const y = scrollY + deltaY;
    window.scrollTo(0, y);
  }

  onTouchEnd(e: TouchEvent) {
    e.preventDefault();
    this.scrollState.enabled = false;
  }

  onTouchMove(e: TouchEvent) {
    e.preventDefault();
    if (this.scrollState.enabled) {
      const { clientX, clientY } = e.touches[0];
      const { start } = this.scrollState;
      window.scrollTo(0, start.scrollY + (start.y - clientY));
      this.scrollState.move = { x: clientX, y: clientY };
    }
  }

  onTouchStart(e: TouchEvent) {
    e.preventDefault();
    const { clientX, clientY } = e.touches[0];
    const { scrollY } = window;
    this.scrollState.start = { x: clientX, y: clientY, scrollY };

    this.scrollState.enabled = true;
  }

  select(root: Document, selector: string): SVGPathElement[] {
    return Array.prototype.slice.call(root.querySelectorAll(selector));
  }

  async loadSvg(url: string) {
    const response = await fetch(url);
    const raw = await response.text();
    const size = await this.getSvgSize(url);
    return { svg: new window.DOMParser().parseFromString(raw, 'image/svg+xml'), size };
  }

  async getSvgSize(url: string) {
    return new Promise<{ width: number; height: number }>((resolve) => {
      const image = new Image();
      image.onload = () => resolve({ width: image.width, height: image.height });
      image.src = url;
    });
  }

  renderer() {
    [...this.props.element.getElementsByTagName('svg')].forEach((svg) => {
      svg.style.display = 'block';
    });

    EnterFrame.add(() => {
      [...this.props.element.getElementsByTagName('svg')].forEach((svg, i) => {
        const { position, angle } = this.engine.world.bodies[i + this.staticObjectNumber];
        const { width, height } = this.SVGsProperty[i].size;
        svg.style.transform = `translate(${position.x - width / 2}px, ${position.y - height / 2}px) rotate(${angle}rad) scale(${this.scale})`;
      });
    });

    EnterFrame.play();
    this.props.onload();
  }

  resize() {
    const { width, height } = this.props.element.getBoundingClientRect();
    this.render.canvas.width = width;
    this.render.canvas.height = height;
  }
}
