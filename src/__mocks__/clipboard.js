class Clipboard {
    constructor() {
      this.on = jest.fn();
      this.off = jest.fn();
      this.destroy = jest.fn();
    }
  }
  
  export default Clipboard;
  