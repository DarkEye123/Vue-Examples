export default {
    data() {
        return {
            elements: ["dore", "remi", "mifa", "faso", "sola"]
        };
    },
    computed: {
        filterElements() {
            return this.elements.filter(element =>
                element.match(this.iText)
            );
        }
    },
    created() {
        console.log("imported mixin lifecycle hook"); //in this specific example will be printed two times
    }
};