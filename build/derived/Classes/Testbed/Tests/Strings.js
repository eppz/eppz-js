/**
 *
 * Created by Borbás Geri on 2/9/14
 * Copyright (c) 2014 eppz! development, LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 */


log('_______________');
log('eppz!js Strings');
log('_______________');


(function()
{
    var A = Class.extend
    ({
        className: 'A',
        aCanDo: function()
        { log(this.className+' can do here.'); },
    });

    var B = A.extend
    ({
        className: 'B',
        bCanDo: function()
        { log(this.className+' can do there.'); },
    });

    var C = B.extend
    ({
        className: 'C',
        cCanDo: function()
        { log(this.className+' can do anywhere.'); },

    });


    var a = new A();
    a.aCanDo();

    var b = new B();
    b.aCanDo();
    b.bCanDo();

    var c = new C();
    c.aCanDo();
    c.bCanDo();
    c.cCanDo();
})();