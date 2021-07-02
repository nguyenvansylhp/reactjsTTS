import React, { useState, useEffect } from 'react'
import './header.css'

// import './style.js'


import ReactDOM from 'react-dom';


const Header = () => {
    return (
        <div className="header">
            <div className="header_inner">
                <div className="header_inner_1">
                    <div className="header_inner_1_logo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOoAAAAyCAYAAABS+UcMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZGY4YTMyYi1jYTExLTlhNGItYTc4MS04NjRjMWU5NzRmYjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkVEMjZDMUVGNzlEMTFFOUE5QTJDMTIzNzJDNDREQ0IiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkVEMjZDMURGNzlEMTFFOUE5QTJDMTIzNzJDNDREQ0IiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2RmOGEzMmItY2ExMS05YTRiLWE3ODEtODY0YzFlOTc0ZmI4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNkZjhhMzJiLWNhMTEtOWE0Yi1hNzgxLTg2NGMxZTk3NGZiOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqX6owoAABT7SURBVHja5F0JtBbFlS4ej30TUUCNIS4xhCiCGkaNS1wQJApoXAGz6DiauKDicgRFE9RgNIk4SSSi6LhOnAAGDAIBJMK4O6gYo0YiKErUIL6wvIAsqe+875/pV+/e6uruah7PuefcA6/77+7qqrt899at6mY1w8/rbGT6u+XNplxqbblN4u/NfG4Wamn5aMuHWf6K5e6WW1iusfyh5VcsL7D8rOUtITfs+MDEug4YcX6WdvS1fKzl3mxDc8urLf/F8lOW57NNwZSzHaD27I9DLe/B9oDWWl7KPpln+b2S2wE60PJR7J/dLbe1vJ598xrHZQ6PBbelnqCGtavK8sGWB1nez/JOlqstf2z5DcvPWH486xh5CDJ4JLmX5V0oq7j/3ywvoVw+HaJnlYZKdKrl35SsqPdYPiPx90OWhwdeu4PlSyxfZHlHz+8q93/X8gTLv7RcG6n9GPzTLY+2vG/KbyGIv7Z8A5W3DPqq5Ystf9MxgBJttbyIfTKVf8ei5uz3MZa/7Pnd4ETf/Ifl8ZbfidwnzShTaEtP5TcDLY+0vMHyg5Z/ZPmtnM/rQJm8lMZAo9P470rLP7d8Ow2pKmialzmlZCWFxTneOTY98Fp0/NuWr0tR0iTBmt9KS3ZohPbvbHk2jcu+Ab+HJ/mu5VctX8O+j0Wfp7LBO40IUNKKAB9OY/wUkUAMQl+8ZPmBFCV1++Z79LAXRuyXXS3PtXy/R0mT1Mry2ZSRq9lHWWgo5fLGFCVN0i78/atEHqpHXUj37NIgNnxDSYqKRnVK/L3R8qwABADrc55wbjNhxNOEFu0sH2S5P41ChfYiDP02PVxeYURbd3OOryCMW0avsjef3zXxGyjROLZtWCjk8xC8511EGC59Qoj7uuU1NC4HEgK2TvwOfz9n+VwKdV6CAb2TiufSny3/nn1URcUZ5BhajNm/E5qeX9DLIwyaSSPm0ouEnR9RUY4gNE+GZDfx2AjKZhqC+AnRjKvcW9i3i/i8thyD/tSvCvWg7PwbkWYDwZ+mKCpc+IAMXi4rDXb+XpASHzQjPBomQDi82A8tL1cs1i0OpG5Fi7+Gg5mFdhGUFHH1ZZbvFeKNllSmm+nVKzTE8sOWTy6QC7iC920mwOxrLd+hwPwulq+yPCrh2Vuxf1tR8bPSdyxPFtryPEODuYoHu4iGK2k4IKzr2Kd5CMb4CRqmJL3F50kO4TD2175O+AdHdVbK8yYRLbn0MMdhqYLIALHPcfRxEuVpigt9p3gs10klKSkG80Tn2G9TrhkjKCkU7QS+7HLlupW0iuMEIwXv8bmMbZ/sKGkNDd3disJt5ID1pWV1jdWtOfsQUPHHgmIgQdTP8k89sfgqy1fSo613xgXC+rWMbTnE8q+EttzAc3OV6zbw/QcKyO1SGrg8IdUjgpL+D/tFQ22LGBItco6PUJSwQhcJ59dRyYcpSmroXf+VBtP1zpNpbOop6gpBgJJWv0UJitrXgSQwFDM8v+/NeNRVgKEZPOL1wiDsSIEOpeMpVK5AvRRw7SoqhpssGclYMQt9jckHl2r5jD8G3mc2BdE1YPc4sCwtrruXyCFJ15JD0MIfGKe5hDCnY8a+QX8eIIQAkOXVKdeuYW7mE+f4TUrc/3meS9KnNMChiVgY28ecYx0ZAtRTVOO62QR19gW4BWiI8/diU5eV1Wg8BShJoxlrhtIWQmCXTmW2NFQIkoQ235ehDasYB7ro4uYM92hFRaoWziEB8krGsZgmvMMXmVQJIXiFfZxj8xTF89FPTMOpue4Zk0utBQ9VkZ8Vgff4wPLPhHacqbS5vaDU8zO++82KUzjcVdSpKcmKsuPTRz2/7Sl4sWW0tlnp98rxEGHozARAkubkiC/nMIHnQseDA68/l4rkEqZ8fpFzPMZa3uQcuyAwhLlEMIhX5kgErWeSRxqb6sB7IN7fSUBekzO25T+VeyfpC8KxlYozSKOnlITVxa6iLvXAtyHEzbEIcKGPc8yXsDpdiH0mmnzZ6FoB1lRi8dYp1x5qGk6pLMvZB3cq75lGVYTaEk0QlC2UEN//zjmGrOl+KdcBieztHFvIeDAPfaAk70JRnTQH/wzjwSz0pnDN153xP0WQh0mMT7PSFqWNcGgdjPMgzat2Y0YsFg0VhORlz++PFo4VKcRoJxzrEJBAkbxY25xtmCpY0CMDrgMU2lM4vlnxAlkhcEjflzk2bT25gTSqVmL9vEbjL4Lc9Eh59ymR5bJlxUhVBT7k5BJhb1q217Xq7xk9k5ZGiKVaeBI0PpLmKXvlbMd6QYB6C/FOWmyfjPE/LDguC4RjB6RcIxV6PFmgDb08aCaN+la8T4rChZKUeOrueXdU+C3J+axdFPn633dPKiqqQl73KGqzCEqKxhyRQVHbMDZM0hsFnv/NjEKXpE+FY8coljCEXnD+bs64x0ea1/3vCGOzXBDOHinXuAUfgN5/yvn8PgKMTsLwNPnTYPpfc7Znc4rHd9/9jyZ/gcapae9VFei6MdfYL4IwDHI82mohsZIkKTWftxa0k5D4SNKeKddLNdHtkwF/RloW6LUr1MJjTJaYOLTS+TutPNP1YCsUgxZC13nOoZ+7plyvjd86E4+aJdrj6s7bBeD+5Z7ze1dwvauoYzze6NmCL+pCt8dTBhYW6r+cY3NyPvuOlMHeLeV6zZMjw3m/CU//Jz3qnRms/+6m4VxlhZZGEsQppv4c7N9Sfv+kAy3zCutZQu7CJdTtfpBj/P6es02zTP3VRZ0TY1wtyOX8nM+ZYOpXrEmwuIGiLmZn76Eo6pUFhADzfwOcY4+mXIO467QIAoh2n5nym67sDy1zihriWtNw4nsHCvjhJr0mNEl/IIdSd8+5FZEUdWzG318W4Zn/Yuqy+CZAURenyFdM8k3/fRJJLr9v6uah01BLuyrFqmrQok+BRh1p6hfhY3pltimfUOI1PuB3VSnxZq0nnkZYMKNAvBqacMiS+GgKdBBRVUj2vFPK+Y5N7N3PNuG1AF0kRS2r+MGFNgsKwBITqHhQ0NudRMTrBYThR0YvcDiO77RHSe/TLsXCNzVCjfYTpn6y8JUCith6G3naGHEukMtdjlz6kqSiR33G6Cv/Ty7QuKzTMkVoZ1rqqwT4OjYgWaARBOm2FA+BwpFvbWNF3dyEFBTZ7R9y/JPTUUjWnV5gbFplVODGoB3oCH/gvA+m6q71XFddpSRwpikXYJ7ryzkaeIAT7OMZZS2fg+deQg/nxoSIkdcXhE+jacx898ByMW0tZGza1ISUFOWgCymUVU4u4ugUtNPWNG06nnLpIkskaI9NQ0XaLgNTIsNfN9v7ogncrycDIdnwaxqZbs45LDNDvfCaCM/ZSHTwWsDAYNX+BSbubg4urWsCQopsNXa1QDLoEOcc+hGT+i+n3KNFE1VQyOK9NNzukkrI6jHMMfi2B2qvCdBCo1e6nBxBUadHFoLLifFPE7wN4C9qQP8R8ZmoyzzKpC9v68CEAbz5l8z/T4KBxJTPOAGGPkolXfoZfG/MIFxMlPBtQS4Rgp0SaGibV3liHi2GRKnWnhkajORKb2GAYiUkIAS3mIbld+8QTv3YxN24KwnXDg80OodRqa82cRc4bM8etSfzBGC34ggZ/5E0+jUlt6NZI7z7QCKECaZhEcsyUzcDAsO1JfSGPkgWq/bX3cnhbVO8kqYXBWCGkcvOsOFYH+OveopBaxlzXGXS51Ar+/DMjxy7bm8xKgTzVgrqQOE8EnKYO729JAOaJ+8Qi/amE3rcyHXLkMv9Td2ytkzkU9T5ngA3S5w6NCLsBcz9Ab2TJASVzOFws+3mFrfSa/cz8npKl1Dr/IJJX5nSFAnLBVHrO8o0rKLakuinlz9j7w2YO5oOSFo4gWnIsyiXuaYkfYr6qUepYBF3C7j/jqbhErm80zJfoCUaqyQW5tJaPdJIgwXhw+LvS0z6vGZlq9GzPyOCCrSAeUFMPUgVVO8waXKVKW9Xy8Yi6AFKKW808lTQQsrlA0UekpaNnOrB/SHw1y3C/zgnHO1HL3SgcA6W+npTN/WyopEHbRPjEqxd/WUKLK2mcF/WxAW1M9HXOcr5WcxrLPgMIoj9iaIO8SCto0z+DQaCFXW20XfvDoG/bpHDzBwxFbw3tlDpoiRShhAOb9mOBhDF7BdwIOelJDoQz32viQpqJyrpIcp5VIZ9w+hfY2jKhOVnqKzqJpzDVMtpRBAxilE2pSkqpjR+p5wDpPWtRmklxJFZ49PPMTjvqOB+3P+xiJ2/JvJgYo6wPyHuao+y3mbyLyNs2UiCiuw1dpXQ6r+vJscyoHk3Ki+j/npnOp3OSjuz7EIYQutCJuKnegbKtzQJLj+5XhGxyeMZG3iXEvPAgKCgYFFOAfPF5bGpskF4L6NvrtaSQp9HqNo0kqJeaOSEHugaE7YQIovRyRvbVpfw7r8y8n7QlWKYuTnRiUa1IYo60+hVE7441c1+zffAaO3eA5RzmIN7Kmcn+zqkzEUCf6Vx0fYR3sPk++5KY9SyYqe/G5RzqLa5Ked9O3jO1ZjtgzCGJ3lQxLwSkNH6EEWFcmmLtY9W3L9UhJ8V9l6hHEdH3Fmgo7VdC2pLgL4uIV7B1IW2m8Eoj1fd6AkxtjXhuzDtFWUq8s0Y344Sq7YTRdV2gcSCj5+VIJcIHT4MrUHVih+Q0T1ROI5VJLs68C+LogImavvcjinY0VqHbMuMMapSHlZinxO1OCWnJyqDtMXOiLU/LGFsKoiksQlw91gP3N9awrtjV4tNoYo6wxO/Sdlf15viQ0HvZ2h0f+U45iqLbgezq3L8/W044FvpeaSFCVrc91FOAY9NmHrqoVj+uyIogkZ5dxOMWcx/jJFLEvGluidKevcVWQLtyuf7JCE6jhZ9jSc+zQp79/PEy0VJ+06m73styGyeIQzO3QXagXj4elO3abMrDFk9PhJuyyP0zXBHYNDGO5zf7O8xokVRyT7K8bdN/prmmMvjDvI4sqLlkNqijdeyKGoF/g5UkhkobKh8a3QvQdGmR7IuLxTsjOYeI+Ar/0NtrrsI/dmCigpC7Se+X9LRefc2pmEC7z0Kg2TRe0RAGqDLTf3pltcERd01R/+FUt8S7x2DtO1wFke4dx/fu2dZJ/lbo0/eJuGvG2NhCVPWInwtobI8QmdoWV8fdJE+YLVXhMHBnJu0wZn0teq1Rl8O9pWSBLEmg4d6t+CzYYC0fYsXbCeKqmXYi66txmYM3XzvnkVRESNpu6Afb/5vPq9otrciwBJtLNgh2qcRlhj/VpdvCtBmJxNnFcyflXhPIm2j7Rh7LncRhOUdBbKXMTYwol2VeH76dqKo2vRibcH7DvDE5UuyKipIK35oz4chqXFEBEXV9m/tVLBDhivH0z6duI7KagLjySxUJSipljjSPsKLdbFFK5Skz0a8KhzT9votmnk+y+NR3t1OFHVVSXKpvfuDmpCk0TSPtUeBwgmmfuVP3iJ87bMIReAmhLmn4iFCspVSVdGwCIO/u+BhN3qSFmuUUOGEgu0YLBybr6CP2GMDNDZCOXdbwffqFFFRtV0Sv1gwLpe+8fOPZH4gq6K+50laIDY9xTn2mMlXlKwp9xEFOuQa5Th2xAvZblP6WhoKPvYs0Cb0v/txqnkpnn2Scu78Au0AInK/f4IM7tPCb99Q+usok39vqPNM3RyyS88b/5fotzVpsn9MCXKJL46vzKuoIK34YQfBqueNLSAg7yteOw/EwmLy44Tj2M/m9sB7ID58TlC0GwoM0tdNw1rm+1OuuUWJlfoXMGQXCp7nASNPOWwx8i6ViC8H5Xg2MtbSFq4w8N8322YXiFB6SckpDDD+LxlodIKRy3BXuHKVR1F9G3Qnpw6K7IS/WVEgGIOrcwjCRCX5gVUtWQrxRwmCc4bJt+EbQoQbBaj5TMp1qNDRPi1yt0n/dKNL+whWHeHABM81ExQFGpcxVkYfYGvVzgrSecFsfzRBge7XZrwPMuyTFdn/jnGSdnkUFdnRkHmtuSZbEb7k+qVM7JUmfBsTzEnOMfJX0i5RoJ2PFpmGn35vRi84NMN9cA3mT5Nlksgcjgy8fmIy0ZAg7NmD0sTQ+t9u9I7tBDjmK9l7mQrmEjK3oatmWrDfpCmZ6QWRSpk0ycj7D5+vxPkSdacTk+D+GCn8yRtTTAv4TdGUOqZoviUkVpozbjnT+HeYG8wYx612gSe4wjScyA+l0cL7tyXSgHHpknL9brx+pNOmc42cZZVoK9HALAVOLTB6lU8y3geUdzfhggEI+SYKitPfUo7fZvwVQWjbE0b+cNdjPB5rHWvsZYCQxxGm4faz0CVsA3ROilwex37fTxhTbIBws3RR3rV6v0mxeFtMnAXdiwgD7nPaCiF4iF7xPgb5H1NJDmZHSnOLG6j8RfZVAjTB6n2s4Pmu4yUv5EDNoCBCkFcTjn6JceRgBx6iry5SPGSawAyhwXH3XkIfLOE4YQ0wKoxq6EGxnc1JTP4YIT4+JzAuREIJ89Io2HCrlUayjybRO6zkO/fms09SZG8i+zDmJzrKWFj/IvMejzjoBf/HDMIFRBxAbJjOwrQlyg8xPXiYcL9PmVC7R3tgXkV9g4Ovfco9axG+jwDlPqIguxPi/Uz4ZP8SKulLEdq0icoBz/VTx4u2oZCGfJbvfSp73m++bqRizWc7ujoCOsyETSHVMvbPuoUnDBG2ykH56KFCDDbWhH3KcTWV+37TdGg6veODpmHJa1+jl0O69Cc6o+d8PyryqQXfVhOxPwA1l0YBgXzW4mxk0LBj+QGRlDRJ9zEuHG/8q1tcqmEiqVcBJXXhKuYxrzfpHx92EQYSUD09CaKQ/kWciQxt1q/BI7z5BaFwU1LSCj1JCItNzLKuZUYOYBTj+ufSflxkmwrEMdp85+ISOmUVoe51hI9HUtAhoDsljM4HDPafJexbaMr92tkn9EZQkgHkr1L4OiU8FrwPvto1k9C4NnI71jLGGU9LP4hoo0fC48MDL6XBmsdYOcbGY5sIwREOHEuIvz/7oFsCHq5hPzxPFDDTxFusf6mSNCx7nTHGHws2xiXkct+EXFYKgLBO903K5SyiseCN/ooo6kcm394wRamG1te1wK1N3O/LZKUNhEPTHcRSbYrXwWZtxwxTv1CgRSIWKpNgEGebhtNyLSmUZe4U2dhTOWuZN3moDLn8pwADAEz7cpTlEMWzAAAAAElFTkSuQmCC" alt=""/>
                    </div>
                    <div className="header_inner_1_khohang">
                        <div   div className="header_inner_1_khohang_kho">
                        <p>The option element</p>

                    
                        <div className="kho1">
                        <select >
                            <option value="volvo">Volvo</option>
                            <option option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        </div>
                        </div>
                    </div>    
                    <div className="header_inner_1_search">
                        <div className="inputsearch">
                             <input type="text" value="Tim Kiem" />
                        </div>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmZDdkZTZjZS0yMDhiLTczNDEtOWRmZi01NjhmODBhZTE2ZWIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkZCQkFGMDBGRUFBMTFFOUJCOTlBQzlCRTYwMTA2NDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkZCQkFFRkZGRUFBMTFFOUJCOTlBQzlCRTYwMTA2NDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Y2Y3ZjQwODEtZjYxNS0yNzQzLTlkNDUtMDkxZjNjMjA2OGY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZkN2RlNmNlLTIwOGItNzM0MS05ZGZmLTU2OGY4MGFlMTZlYiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtPhXMgAAALeSURBVHja1JjLaxRBEMZ3F81DBU2CXvQgkghqPESJIQZFBJcVRUHxXxAULxJdPCnRSwIJOeXsQQJq1BDFRyBgfItCVBDxsQGRIKIG8UniI+vXUAMfTTLbM9szvWn4Qe/sVNXX3TPVPZXM5/OJ2dCSIWyWgW2gBawBS8Ei+e8beA+eg/tgCLyNe1BbwQXwF+QDMAB2xDGj9aALpLXraqaeglHwRa5VgeWgAazQ7h8GrWAkilk8pM2OWtZu0Gxg2yQDHNN8tNoWeUYLcAJUhPBTBrKarz5bIk+T0xxotOBTPQ6vyO/lYh2eImfqrS23uEpzwQ3y3x3W0RZy8jjCDPKA4mwPapwCX8V4POTzGGRmP0qsiaCr1kaj3BVDXt5I8bpMjSrBPzF6GOMmMkxiF5oY7CeDlhiFNlHcwyYG9+TmUQfnDS9lFdyxasGU3NzuQOhJmtUavze9mfb8Ww6E3qb+Bj+hdfT7paOl91qdn9DF0lf57LMDoSrmD+kv8RPqJfZfYNKB0EmJnfDbZFIkbp7lfd20lUtsb1VnFPqJRlPjQKiKuYAegxmF5uj3SgdCOeYbP6G8ZW52IHQT9R+ZHrteOxD6QmI/M7n5IO0OjTGKbKC4WROD+XR6uhuj0CESWm1q1E5G6RhErqN4PUG/Fr+L4Qc5hUfVUvQZ/ZvSk3FL0yjvRCj0JsXZE9ZJp1aOsd0ukv+2Yp2dJWcqbayylNhHtEJEj42Rn5umFFMWws8ccAD8IV9c5jlvQ+xRTeyYLFe9ge1qcBy803xkZcC9dO1qIWcm1Tx16u6Q4gQ3VQN9ImeFcbmmcqGq4q0Ha7X7Vb30mPaSXgcZ6asSz24bs5vRyjGmqKS+18fvFe3e0DM63UuRkQJCrXwheHnwpxzVcnJ+GJS9vFBTYndKXxWL90WVFyuFZBE++hIWK31Rt34S21/qYgdI7LVSFzuoia0qZbGXSGzvbHhmVc32yH8BBgCxZvdQN6I+yAAAAABJRU5ErkJggg==" alt=""/>
                    </div>
                    <div className="header_inner_1_login">
                        <div className="header_inner_1_login_dangky">
                            <a href="">Đăng Nhập /</a>
                        </div>
                        <div className="header_inner_1_login_dangnhap">
                            <a href=""> Đăng Ký</a>
                        </div>
                    </div>
                    <div className="header_inner_1_giohang">
                        <div className="giohangimg">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA3CAYAAABO8hkCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABANpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ1dWlkOjVEMjA4OTI0OTNCRkRCMTE5MTRBODU5MEQzMTUwOEM4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjEwRDU5QkZERjk1MzExRTlCRTFBQzU5MDBENUYwNzAyIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwRDU5QkZDRjk1MzExRTlCRTFBQzU5MDBENUYwNzAyIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIElsbHVzdHJhdG9yIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWU4MTNjNjItYWVkMy1jOTQwLTg0ZDMtODM3MmJhMGExM2JjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpk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" alt=""/>
                        </div>
                        <div className="sogiohang">
                            <p>(0)</p>
                        </div>
                    </div>
                </div>
                <div className="header_inner_menu">
                    <ul><li><a href="">GIÀY</a></li><li><a href="">TÚI XÁCH</a></li><li><a href="">BALO</a></li><li><a href="">VÍ BÓP</a></li><li><a href="">DÉP &amp; GUỐC</a></li><li><a href="">PHỤ KIỆN</a></li><li><a href="">GIFTCARD</a></li><li><a href="">SALE OFF</a></li><li><a href="">NEW ARRIVAL</a></li><li><a href="">SUMMER KISSES</a></li><li><a href="">TIN TỨC</a></li></ul>
                </div>
            </div>
        </div>
    )
}
export default Header;

    
   
  