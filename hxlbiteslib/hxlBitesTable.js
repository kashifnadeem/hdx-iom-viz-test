hxlBites._tableBites = [
{
'id':'table0001',
'type':'table',
'subType':'capped',
'ingredients':[{'name':'who','tags':['#org']},{'name':'what','tags':['#activity','#sector']},{'name':'where','tags':['#country-code','#region-code','#adm1-code','#adm2-code','#adm3-code','#adm4-code']}],
'criteria':['what > 1','who > 1', 'where > 1'],
'variables': ['what', 'who', 'where', 'count()'],
'table':'rows(10)',
'title':'Top 10',
'priority': 7,
},
{
'id':'table0002',
'type':'table',
'subType':'capped',
'ingredients':[{'name':'who','tags':['#org']},{'name':'what','tags':['#activity','#sector']},{'name':'where','tags':['#country-code','#region-code','#adm1-code','#adm2-code','#adm3-code','#adm4-code']}],
'criteria':['what > 1','who < 2', 'where > 1'],
'variables': ['what', 'where'],
'table':'rows(10)',
'title':'',
'priority': 3,
},
{
'id':'table0003',
'type':'table',
'subType':'capped',
'ingredients':[{'name':'who','tags':['#org']},{'name':'what','tags':['#activity','#sector']},{'name':'where','tags':['#country-code','#region-code','#adm1-code','#adm2-code','#adm3-code','#adm4-code']}],
'criteria':['what > 1','who > 1', 'where < 2'],
'variables': ['what', 'who'],
'table':'rows(10)',
'title':'',
'priority': 3,
},
{
'id':'table0004',
'type':'table',
'subType':'capped',
'ingredients':[{'name':'who','tags':['#org']},{'name':'what','tags':['#activity','#sector']},{'name':'where','tags':['#country-code','#region-code','#adm1-code','#adm2-code','#adm3-code','#adm4-code']}],
'criteria':['what < 2','who > 1', 'where > 1'],
'variables': ['who', 'where'],
'table':'rows(10)',
'title':'',
'priority': 3,
},
{
'id':'table0005',
'type':'table',
'subType':'capped',
'ingredients':[{'name':'who','tags':['#org']},{'name':'what','tags':['#activity','#sector']},{'name':'where','tags':['#country-code','#region-code','#adm1-code','#adm2-code','#adm3-code','#adm4-code']}],
'criteria':['what < 2','who > 1', 'where > 1'],
'variables': ['where', 'who'],
'table':'rows(10)',
'title':'',
'priority': 2,
},
{
'id':'table0006',
'type':'table',
'subType':'uncapped',
'ingredients':[{'name':'indicator','tags':['#indicator','#severity']},{'name':'value','tags':['#value','#affected']}],
'criteria':['indicator > 5'],
'variables': ['indicator', 'sum(value)'],
'table':'',
'title':'',
'priority': 2,
},
{
'id':'table0007',
'type':'table',
'subType':'uncapped',
'ingredients':[{'name':'who','tags':['#org-id-code']},{'name':'value','tags':['#value','#reached']}],
'criteria':['who > 10'],
'variables': ['who', 'sum(value)'],
'table':'',
'title':'{2} by {1}',
'priority': 8,
},
{
'id':'table0008',
'type':'table',
'subType':'uncapped',
'ingredients':[{'name':'what','tags':['#activity-code-id','#sector']}],
'criteria':['what > 10'],
'variables': ['what', 'count()'],
'table':'',
'title':'Count of {1}',
'priority': 8,
}
]