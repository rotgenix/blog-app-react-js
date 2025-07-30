export function hasNoEmptyOrNullKeys(obj) {
    const keysToCheck = ['name', 'email', '_id', 'token'];

    return keysToCheck.every(
        key => obj[key] !== null && obj[key] !== undefined && obj[key] !== ''
    );
}