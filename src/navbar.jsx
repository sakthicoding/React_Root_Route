import "./styles.css";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/kitchen">Kitchen</a>
        </li>
        <li>
          <a href="/living-room">Living Room</a>
        </li>
      </ul>
    </nav>
  );
}
