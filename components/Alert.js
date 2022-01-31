function Alert({ type, children }) {
  const cls = `alert alert-${type}`;
  return (
    <div class={cls} role="alert">
      {children}
    </div>
  );
}

export default Alert;
