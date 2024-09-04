use rand::Rng;
use std::collections::HashMap;

fn main() {
    let mut rng = rand::thread_rng();
    let mut special_map = HashMap::with_capacity(7);
    let mut points = 21;

    special_map.insert(1, "Strength");
    special_map.insert(2, "Perception");
    special_map.insert(3, "Endurance");
    special_map.insert(4, "Charisma");
    special_map.insert(5, "Intelligence");
    special_map.insert(6, "Agility");
    special_map.insert(7, "Luck");

    // Loop over the seven S.P.E.C.I.A.L attributes
    println!("-----------------");
    println!("Final attributes:");
    println!("-----------------");
    for j in 1..=7 {
        let val = std::cmp::min(points, 8);
        let attr;
        let attr_char = special_map.get(&j).unwrap();

        if val == 1 {
            attr = 1;
        } else if val == 0 {
            attr = 0;
        } else {
            attr = rng.gen_range(1..val);
        }

        points = points - attr;
        println!("| {:<10} \t| {} |", attr_char, attr+1);
    }
}
