function getProperty<J>(obj: J, key: keyof J): J[keyof J] {
    return obj[key];
}