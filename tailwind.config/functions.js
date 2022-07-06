module.exports = {
    generateSpacing: function ([pixelsBase, values]) {
        return values.reduce((acc, v) => {
            acc[`${v.toString().replace(".", "_")}`] = `${((pixelsBase * v) * .1).toFixed(1)}rem`
            return acc;
        }, {})
    }
}