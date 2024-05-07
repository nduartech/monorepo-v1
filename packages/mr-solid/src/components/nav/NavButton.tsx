import 'animate.css';

function NavButton(props:any) {
  return (
    <div class="animate__animated animate__fadeIn navButton cursor-pointer flex flex-row space-x-1.5 items-center justify-center w-full py-2 px-2 text-xs font-medium text-regal-blue-50 dark:text-regal-blue-50 border border-transparent rounded-lg focus:outline-none lg:hover:outline lg:hover:outline-1 lg:hover:outline-offset-1 lg:hover:outline-regal-blue-200" data-path={props.path} onClick={props.onClick} >
      <i class={"iconoir-"+props.icon+" before:size-4 before:text-regal-blue-100 inline-flex"}>
      </i>
      <p class="navIconLabel">{props.label}</p>
    </div>
  );
}

export default NavButton;
