module.exports = func => {
    const inner = async data => {
        let result, error;
        try {
            result = await func(data);
        } catch (err) {
            error = err;
        } finally {
            return [result, error];
        }
    }
    return inner;
}