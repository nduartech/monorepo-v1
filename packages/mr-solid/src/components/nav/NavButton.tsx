function NavButton(props:any) {
  return (
    <div class="navButton cursor-pointer flex flex-row space-x-1.5 items-center justify-center text-xs font-medium text-regal-blue-50 dark:text-regal-blue-50" data-path={props.path} onClick={props.onClick} innerHTML={props.icon+'<p class="navIconLabel">'+props.label+'</p>'}>
    </div>
  );
}

export default NavButton;
