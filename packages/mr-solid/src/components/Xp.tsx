import resume from '../../resume.pdf';

function Xp(props: any) {
  return (
    <>
      <div class="flex flex-col justify-center items-center h-1/4 min-h-fit w-full md:h-full md:w-4/12 bg-gray-800">
        <div class="w-11/12">
          <p class="text-gray-600 text-sm text-center">Hit Next to Get Started</p>
        </div>
      </div>
      <div class="flex flex-col justify-start items-center h-3/4 min-h-fit w-full md:h-full md:w-8/12 bg-gray-900 pt-5">
        <div class="w-1/2 h-fit flex flex-row justify-center items-center top space-x-10">
          <div class="flex flex-row justify-center items-center" onClick={()=>window.open("https://www.linkedin.com/in/nathanduarte")}>
            <p class="text-regal-blue-100 text-xs font-light">LinkedIn</p>
            <i class="iconoir-linkedin before:size-8 before:text-regal-blue-100 m-2">
            </i>
          </div>
          <div class="flex flex-row justify-center items-center" onClick={()=>fetch(resume)
            .then(resp => resp.blob() )
            .then(blob => {
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.style.display = 'none';
              a.href = url;
              // the filename you want
              a.download = 'NathanDuarteResume.pdf';
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('Download failed'))}>
            <p class="text-regal-blue-100 text-xs font-light">Resume</p>
            <i class="iconoir-page before:size-7 before:text-regal-blue-100 m-2">
            </i>
          </div>
        </div>
        <div class="w-9/12 h-full flex flex-col items-center justify-center">
          <p class="text-white text-sm text-center">As a fullstack software engineer, I've had the opportunity to work with some
            diverse technology stacks. Here I examine the methodologies and skills I've employed over the course of my career
            and personal projects.</p>
          <p class="text-gray-600 text-xs text-center">To move forward, hit next. To go back, hit back. Also included on this page
            are shortcuts to my LinkedIn profile as well as my resume.</p>
        </div>
      </div>
    </>
  )
    ;
}

export default Xp;
