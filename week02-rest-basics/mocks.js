class mocks {
    fetch() {
        this.setState({foo: "bar"});
        return {
            then: function (foo, bar) {
                return {
                    then: function () {
                        return {
                            catch: function () {

                            }
                        }
                    }
                }
            }
        }
    }
}
export default App;