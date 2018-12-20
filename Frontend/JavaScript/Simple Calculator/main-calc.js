function MainCalculator(value) {
    this.mainDisplay = [];

    this.addValue = function (val) {
        this.mainDisplay.push(val);
    }

    this.removeValue = function (val) {
        this.mainDisplay.pop(val);
    }

    this.checkDisplay = function () {

        return parseInt(this.mainDisplay.join(""));
    }

    this.handleOperator = function (oper) {
        if (oper === "=") {

            if (this.operator === "+") {
                this.result = this.num + this.checkDisplay()
                this.mainDisplay = []
                this.addValue(this.result)

            } else if (this.operator === "-") {
                this.result = this.num * this.checkDisplay()
                this.mainDisplay = []
                this.addValue(this.result)

            } else if (this.operator === "*") {
                this.result = this.num * this.checkDisplay()
                this.mainDisplay = []
                this.addValue(this.result)

            } else if (this.operator === "/") {
                this.result = this.num / this.checkDisplay()
                this.mainDisplay = []
                this.addValue(this.result)
            }

        } else if (oper == ".") {
            //todo
        } else {
            this.num = this.checkDisplay();
            this.operator = oper;
            this.mainDisplay = []
            return (this.num, this.operator, this.mainDisplay)
        }
    }

    this.handleClick = function (value) {

        if (value >= "0" && value <= "9") {
            this.addValue(value);
            return value;

        } else if (value === "C") {
            if (this.mainDisplay.length === 1) {
                this.addValue(0);
                this.mainDisplay.shift();
            }

        } else {
            this.handleOperator(value)
        }
    }

}