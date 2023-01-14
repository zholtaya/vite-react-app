// function Header(){
//     return (
//       <header>
//         <h1>header</h1>
//       <p>meowmeow</p>

import Avatar from "../Avatar/Avatar";

//       </header>  
//     );
// }
// export default Header;
// export function Header() {
//     return (
//         <header>
//             <h1>header</h1>
//             <p>meowmeow</p>

//         </header>
//     );
// }

const MENU = [
    {
        name: "Home",
        path: "/home",
    },
    {
        name: "Catalog",
        path: "/catalog",
    },
    {
        name: "About",
        path: "/about",
    },
];


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {
                        MENU.map((item) => {
                            return (
                                <li key={item.name}> <a href="{item.path}">{item.name}</a></li>
                            );

                        }
                        )
                    }

                </ul>
            </nav>
        </header>
    );
}
export default Header;