const serializeMap = map => Array.from(map).reduce((acc, cur) => {
    acc.push({key: cur[0], val: cur[1]});
    return acc;
}, []);

const deserializeMap = data => {
    return data.reduce((acc, cur) => acc.set(cur.key, cur.val), new Map());
};

export default {serializeMap, deserializeMap};
