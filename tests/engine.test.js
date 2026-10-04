import test from 'node:test';import assert from 'node:assert/strict';import {assess,markdown,fields,lines} from '../engine.js';
const blank=()=>Object.fromEntries(fields.map(f=>[f,'']));
test('whitespace-only requirements remain unresolved',()=>{const data=blank();data.goal='  ';assert.equal(assess(data).filter(c=>c.done).length,0);});
test('complete brief resolves every completeness check',()=>{const data=Object.fromEntries(fields.map(f=>[f,'Confirmed']));assert.equal(assess(data).filter(c=>c.done).length,8);assert.match(markdown(data),/change-request process/);});
test('export keeps user content and exposes unresolved terms',()=>{const data=blank();data.project='Studio';data.deliverables='Booking form\nEmail';const text=markdown(data);assert.match(text,/# Studio/);assert.match(text,/Booking form\nEmail/);assert.match(text,/To be confirmed/);assert.match(text,/payment schedule/);assert.deepEqual(lines('\nOne\r\n Two \n'),['One','Two']);});
