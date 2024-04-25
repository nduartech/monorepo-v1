function NavButton(props:any) {
  return (
    <div class="navButton flex flex-row space-x-1.5 items-center justify-center bg-regal-blue-600 hover:bg-regal-blue-500 dark:bg-regal-blue-800 dark:hover:bg-regal-blue-900 w-full py-2 px-2 text-sm font-medium text-regal-blue-50 dark:text-regal-blue-50 border border-transparent rounded-lg focus:outline-none hover:outline hover:outline-1 hover:outline-offset-1 hover:outline-regal-blue-200" data-path={props.path} onClick={props.onClick} >
      <i class={"iconoir-"+props.icon+" before:size-5 before:text-regal-blue-100 inline-flex"}>
      </i>
      <p class="navIconLabel">{props.label}</p>
    </div>
  );
}

export default NavButton;
