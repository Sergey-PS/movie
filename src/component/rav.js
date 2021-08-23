export default function rav(p, g) {
    let s = [];
    for (let i in p) {
        s.push(g.map(f => {
            if (f.id === p[i]) return f.name
        }))
    }
    return s;
}
