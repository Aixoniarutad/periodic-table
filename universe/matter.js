var Matter = (function () {
    function Matter(data) {
        this.data = data;
    }
    Matter.prototype.information = function () {
        console.log(this.data);
        return this.data;
    };
    Matter.get = function (variable) {
        return this[variable];
    };
    return Matter;
})();
