function toDegToRad (angle: number): number {
    return angle * (Math.PI / 180);
  }


function parabolaArea(a: number, b: number, angle: number): number {
    const angleInRad = toDegToRad(angle);

    return a * b * Math.sin(angleInRad);
  }

  const button = document.getElementById('btn');

  button?.addEventListener('click', function handleClick(event) {
    let siteaVaule = 0;
    let sitebVaule = 0;
    let angleVaule = 0;
    const siteaElement = document.getElementById('sitea') as HTMLInputElement | null
    if(!siteaElement != null && siteaElement != undefined){
        siteaVaule =  Number(siteaElement?.value);
    }
    const sitebElement = document.getElementById('siteb') as HTMLInputElement | null
    if(!sitebElement != null && siteaElement != undefined){
        sitebVaule =  Number(sitebElement?.value);
    }
    const angleElement = document.getElementById('angle') as HTMLInputElement | null
    if(!angleElement != null && angleElement != undefined){
        angleVaule =  Number(angleElement?.value);
    }
    const areaValue = parabolaArea(siteaVaule,sitebVaule,angleVaule);
    const areaElement = document.getElementById('area') as HTMLInputElement | null
    if(areaElement != null){
        areaElement.textContent = "A paralelogramma területe: " +areaValue;
    }
  });


