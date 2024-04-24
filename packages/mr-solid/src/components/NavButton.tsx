function NavButton(props:any) {
  console.log(props);
  return (
    <div class="navButton">
      <i class={"iconoir-"+props.icon+" before:size-8 before:text-regal-blue-100 inline-flex"}>
        {props.label}
      </i>
    </div>
  );
}

export default NavButton;
