class Button {
  constructor(label, height, width, color, type, props) {
    this.label = label;
    this.height = height;
    this.width = width;
    this.color = color;
    this.type = type;
    this.props = [height, width, color, type];
  }

  onClick() {
    console.log(this.props);
  }

  testButton() {
    if (
      typeof this.height == "number" &&
      typeof this.width == "number" &&
      this.color == "green" &&
      this.type == "button"
    ) {
      console.log(`The button "${this.label}" is correct!`);
    } else {
      console.log(`The button "${this.label}" isn't correct:`);
    }

    if (typeof this.height != "number") {
      console.log("height must be number.");
    } else if (typeof this.height == "number") {
    }

    if (typeof this.width != "number") {
      console.log("width must be number.");
    } else if (typeof this.width == "number") {
    }

    if (this.color != "green") {
      console.log("color must be green.");
    } else if (this.color == "green") {
    }

    if (this.type != "button") {
      console.log("type must be button.");
    } else if (this.type == "button") {
    }
  }
}

let redButton = new Button("Help", "20", 30, "red", "button");
redButton.onClick();
redButton.testButton();

let greenButton = new Button("Start", 30, 30, "green", "button");
greenButton.onClick();
greenButton.testButton();
