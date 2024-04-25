function NavButton(props:any) {
  return (
    <div class="navButton text-regal-blue-100 text-sm flex flex-row items-center justify-center
    space-x-2  pl-1.5 pr-2.5 py-1.5 bg-regal-blue-800 rounded" data-path={props.path} onClick={props.onClick} >
      <i class={"iconoir-"+props.icon+" before:size-6 before:text-regal-blue-100 inline-flex"}>
      </i>
      <p class="navIconLabel">{props.label}</p>
    </div>
  );
}

export default NavButton;
