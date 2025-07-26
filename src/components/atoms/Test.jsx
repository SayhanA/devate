const tagToSize = {
  h1: "text-4xl font-bold",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
  h6: "text-base",
  p: "text-base",
  span: "text-base",
  div: "text-base",
};

const Text = ({ children, as: Component = "p", className = "", ...props }) => {
  const sizeClass = tagToSize[Component] || "";

  return (
    <Component className={`${sizeClass} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Text;
