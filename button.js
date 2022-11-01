class Button {
  constructor(height, width, color, type, props) {
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
      console.log("The button is correct!");
    } else {
      console.log(" The button isn't correct:");
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

let mainButton = new Button("20", 30, "red", "button");
mainButton.onClick();
mainButton.testButton();
