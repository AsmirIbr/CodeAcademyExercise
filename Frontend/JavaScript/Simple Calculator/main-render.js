function CalculatorRenderer() {
    this.calculator = new MainCalculator();
    this.renderAll = function () {
        $("#main-container").addClass("mainContainer").append($(this.renderField())).append(this.renderWrapper());
        var that = this;
        $("button").on("click", function (event) {

            var clicked = event.target.innerText;
            that.calculator.handleClick(clicked);
            
            var displayValue = that.calculator.checkDisplay();
            $("#field").html(displayValue);

        })

    }
    this.renderField = function () {
        var $field = $("<div>").addClass("fieldInput").attr("id", "field").text("0").attr("type", "text"); //da ne e input
        return $field;
    }
    this.renderWrapper = function () {
        var $wrapper = $("<div>").addClass("wrapper");

        for (var i = 0; i < 10; i++) {
            $("<button>").addClass("class" + i).attr("id", i).text(i).appendTo($wrapper);
        }

        $("<button>").attr("id", "plus").text("+").appendTo($wrapper);
        $("<button>").attr("id", "minus").text("-").appendTo($wrapper);
        $("<button>").attr("id", "multiply").text("*").appendTo($wrapper);
        $("<button>").attr("id", "dot").text(".").appendTo($wrapper);
        $("<button>").attr("id", "clear").text("C").appendTo($wrapper);
        $("<button>").attr("id", "divide").text("/").appendTo($wrapper);
        $("<button>").addClass("equals").attr("id", "equals").text("=").appendTo($wrapper);
        return $wrapper;
    }

}