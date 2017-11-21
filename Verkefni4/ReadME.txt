Verkefni 4.
Elas og Hilmar

Í þessu verkefni notuðum við Cognitive Face API hérna https://azure.microsoft.com/en-us/try/cognitive-services/
í link.js er kóði frá Face API'inu sem sér um að þú gætir notað direct link til að fá image.
Link.js er með AnalyzeLink function,
þar er búið til sourceimageurl breytu sem er notuð til að byrta myndina,
í ajax breytuni er svo fengið urlið og sett það í data til þess að geta fengið upplýsingarnar um myndina
Showlinkedimage er function til þess að byrta myndina sem er notuð saman með sourceImageUrl

Í upload.js er kóði til þess að ná að nota images sem userinn uploadar sjálfur frá tölvuni sinni.
Upload.js er mjög svipað link.js fyrir utan að í því er tekið inn data öðruvísi því það er ekki lengur link.

Við ætluðum líka að láta það vera hægt að taka mynd og analyza hana,
en það virkaði ekki að analyza því myndavélin tekur myndir í base64 file type en azure face apin þarf að fá myndina í binary.

Notkun
Það er hægt að annað hvort nota mynd sem þú ert með í tölvuni með upload takkanum,
eða taka direct link af einhverjari mynd á netinu með
því að hægri smella og gera copy image url.
Ef þú villt nota slóð, setiru hana bara í línuna og ýtir á enter

Það sem virkaði ekki
Við gerðum uploadið fyrst þannig að það tók svolítin tíma því við vorum enn að reyna að fatta hvernig þetta virkaði.
Það tók stuttan tíma að gera link javascriptið því það voru meiri gögn um það á netinu og því við vorum aðeins búnir að fatta hvernig þetta virkaði.
Flestur tíminn fór í það að taka mynd og analyza hana því við föttuðum ekki hvernig maður ætti að breyta úr base64 yfir í binary.

https://elas99.github.io/Verkefni4/
