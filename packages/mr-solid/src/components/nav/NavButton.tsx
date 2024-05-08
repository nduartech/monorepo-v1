function NavButton(props:any) {
  return (
    <div class="navButton cursor-pointer flex flex-row space-x-2 items-center justify-center text-xs font-medium text-regal-blue-50 dark:text-regal-blue-50 text-center" data-path={props.path} onClick={props.onClick} innerHTML={props.icon+'<p class="navIconLabel hidden md:flex">'+props.label+'</p>'}>
    </div>
  );
}

export default NavButton;
