function WriteMethod(x) {
    var text = this.state.text;
    var len = text.length;
    if ([".", "/", "*", "-", "+"].includes(x) && [".", "/", "*", "-", "+"].includes(text[len - 1])) {
        return false;
    }
    switch (x) {
        case "CE":
            this.setState({ text: "" })
            this.setState({ result: "" })
            break;
        case "C":
            this.setState({ text: text.substr(0, len - 1) })
            this.setState({ result: "" })
            break;
        case "=":
            if ([".", "/", "*", "-", "+"].includes(text[len - 1])) {
                return false;
            }
            this.setState({ result: eval(text) })
            break;
        case ".":
            let arr = ["/", "*", "-", "+"];
            let indexes = [];
            let textTr = "";
            for (let i = 0; i < arr.length; i++) {
                indexes.push(text.lastIndexOf(arr[i]));
            }
            var index = Math.max(...indexes);
            if (index == -1) {
                textTr = text;
            } else {
                textTr = text.substr(index);
            }
            if (textTr.includes(".")) {
                return false;
            }
        default:
            if (len == 0 && (x == "*" || x == "/" || x == ".")) {
                return false
            }
            if (text[len - 1] == "0" && (len == 1 || ["/", "*", "-", "+"].includes(text[len - 2]))) {
                if (x == "0") {
                    return false;
                } else if (!isNaN(x) && len == 1) {
                    this.setState({ text: x })
                    return true;
                }
            }
            this.setState({ result: "" })
            this.setState({ text: text + x })
            break;
    }
}

export default WriteMethod
