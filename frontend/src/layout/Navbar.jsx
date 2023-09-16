const Navbar = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.replace("/login");
  };

  return (
    <div id="navbar">
      <button onClick={handleLogout}>LOG-OUT</button>
    </div>
  );
}
  
export default Navbar;