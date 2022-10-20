module.exports = {
    generateSpacing: function ([pixelsBase, values]) {
        return values.reduce((acc, v) => {
            acc[`${v.toString().replace('.', '_')}`] = `${(
                pixelsBase *
                v *
                0.1
            ).toFixed(1)}rem`
            return acc
        }, {})
    },

    generateFontSizes: function (values) {
        return values.reduce((acc, v) => {
            acc[v] = `${(v * 0.1).toFixed(1)}rem`
            return acc
        }, {})
    }
}
