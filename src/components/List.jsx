import { useState } from "react";

export function List() {
    const [users] = useState(["Carol", "Carla", "Marcos", "Pedro", "João"]);
    const [search, setSearch] = useState("");

    return (
        <div>
            <input
                className="bg-gray-400 rounded-2xl"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
            />
            <ul>
                {
                    users
                        .filter(user => user.toLowerCase().includes(search.toLowerCase()))
                        .map((userName, id) => (
                            <li
                                className="text-white"
                                key={id}>{userName}
                            </li>
                        ))
                }
            </ul>
        </div>
    )
}