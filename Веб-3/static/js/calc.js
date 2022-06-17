
var selected = 1
var first = 0
var second = 0
var depth = 0
var action = ''


function click_calc(parameter) 
{
    if(parameter>=0&&parameter<=9)
        add(parameter)
    
    else
        if(parameter=='.'&&depth>=0)
            depth=-1
        else
            if(parameter!='=')
            {
                action=parameter
                if (selected==1)
                {
                    selected=2
                    depth=0
                }
            }
            else
                if(selected==2)
                {
                    switch(action)
                    {
                        case '-':
                            {
                                first-=second
                                break;
                            }
                        case '+':
                            {
                                first+=second
                                break;
                            }
                        case '/':
                            {
                                first/=second
                                break;
                            }
                        case '*':
                            {
                                first*=second
                                break;
                            }
                    }
                    selected = 1
                    second = 0
                    depth = 0
                    action = ''
                }







    if (action=='')
    document.getElementById('out').innerHTML = String(first)
    else
    document.getElementById('out').innerHTML = String(first) + action + String(second)
}

function add(num)
{
    if(selected==1)
    {
        if(depth>=0)
        {
            first   = first*10 + num
            depth++
        }
        else
        {
            first   += num*Math.pow(10,depth)
            depth--
        }
    }
    else
    {
        if(depth>=0)
        {
            second   = second*10 + num
            depth++
        }
        else
        {
            second   += num*Math.pow(10,depth)
            depth--
        }
    }
}