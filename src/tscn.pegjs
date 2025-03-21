// PEG grammar for Godot .tscn files

scene
  = descriptor:entity
    entities:(ws entity:entity ws { return entity; })*
    { return { descriptor: descriptor, entities: entities } }

entity
  = begin_entity ws
    type:name ws
    heading:props
    end_entity ws
    props:props
    { return props ?
    	{ type: type, heading: heading, props: props } :
      { type: type, heading: heading }
    }

props
  = props:(
      head:member
      tail:(ws m:member { return m; })*
      {
        var result = {};

        [head].concat(tail).forEach(function(element) {
          result[element.name] = element.value;
        });

        return result;
      }
    )?
    { return props; }

member
  = name:name name_separator value:value {
      return { name: name, value: value };
    }

value
  = false
  / null
  / true
  / number
  / string
  / internal
  / array
  / object

object
  = "{" ws members:object_members? ws "}"
    { return members !== null ? members : {}; }

object_members
  = head:object_member
    tail:(ws "," ws m:object_member { return m; })*
    { 
      var result = {};
      [head].concat(tail).forEach(m => result[m.name] = m.value);
      return result;
    }

object_member
  = key:(string / prefixed_string / name) ws ":" ws value:value {
      return { name: key, value: value };
    }

// Support for `&"KEY"` syntax in dictionaries
prefixed_string
  = "&" s:string { return s; }

// Array
array
  = begin_array
    values:value_list?
    end_array
    { return values !== null ? values : []; }

value_list
  = head:value
    tail:(value_separator v:value { return v; })*
    { return [head].concat(tail); }

// Godot internal types: Color, ExtResource, etc.
internal
  = type:name
    "(" ws
    params:value_list? ws
    ")"
    { return { type: type, params: params || [] }; }

// Common
false
  = "false" { return false; }

true
  = "true"  { return true; }

null
  = "null"  { return null; }

begin_array
  = ws "[" ws

end_array
  = ws "]" ws

begin_entity
  = ws "[" ws

end_entity
  = ws "]" ws

name_separator
  = ws "=" ws

value_separator
  = ws "," ws

ws "whitespace"
  = [ \t\n\r]*

// Numbers
number "number"
  = minus? int frac? exp? { return parseFloat(text()); }

decimal_point
  = "."

digit1_9
  = [1-9]

e
  = [eE]

exp
  = e (minus / plus)? DIGIT+

frac
  = decimal_point DIGIT+

int
  = zero / (digit1_9 DIGIT*)

minus
  = "-"

plus
  = "+"

zero
  = "0"

// Strings
name
  = chars:[/_a-zA-Z0-9-]+ { return chars.join(''); }

string "string"
  = '"' chars:[^"]* '"' { return chars.join(''); }


DIGIT
  = [0-9]

HEXDIG
  = [0-9a-f]i