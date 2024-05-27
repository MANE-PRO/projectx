function Admin(props) {
  function adminLogout() {
    props.onLogout();
  }
  return (
    <div>
      <div> Admin </div>
      <button onClick={adminLogout}>Logout</button>
    </div>
  );
}

export default Admin;
