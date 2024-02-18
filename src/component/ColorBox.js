export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    width: "170px",
    height: "20px",
    marginTop: "5px",
  };
  return (
    <div style={styles}></div>
  );
}
